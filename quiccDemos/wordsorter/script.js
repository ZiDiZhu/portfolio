function cleanString(str) {
    return str.replace(/[^\w\s]|_/g, '')
        .replace(/\s+/g, ' ')
        .toLowerCase();
}

function extractSubstr(str, regexp) {
    return cleanString(str).match(regexp) || [];
}

function getWordsByNonWhiteSpace(str) {
    return extractSubstr(str, /\S+/g);
}

function getWordsByWordBoundaries(str) {
    return extractSubstr(str, /\b[a-z\d]+\b/g);
}

function wordMap(str) {
    return getWordsByWordBoundaries(str).reduce(function(map, word) {
        map[word] = (map[word] || 0) + 1;
        return map;
    }, {});
}

function mapToTuples(map) {
    return Object.keys(map).map(function(key) {
        return [ key, map[key] ];
    });
}

function mapToSortedTuples(map, sortFn, sortOrder) {
    return mapToTuples(map).sort(function(a, b) {
        return sortFn.call(undefined, a, b, sortOrder);
    });
}

function countWords(str) {
    return getWordsByWordBoundaries(str).length;
}

function wordFrequency(str) {
    return mapToSortedTuples(wordMap(str), function(a, b, order) {
        if (b[1] > a[1]) {
            return order[1] * -1;
        } else if (a[1] > b[1]) {
            return order[1] * 1;
        } else {
            return order[0] * (a[0] < b[0] ? -1 : (a[0] > b[0] ? 1 : 0));
        }
    }, [1, -1]);
}

function printTuples(tuples) {
    return tuples.map(function(tuple) {
        return padStr(tuple[0], ' ', 12, 1) + ' -> ' + tuple[1];
    }).join('\n');
}

function padStr(str, ch, width, dir) {
    return (width <= str.length ? str : padStr(dir < 0 ? ch + str : str + ch, ch, width, dir)).substr(0, width);
}

function toTable(data, headers) {
    return $('<table>').append($('<thead>').append($('<tr>').append(headers.map(function(header) {
        return $('<th>').html(header);
    })))).append($('<tbody>').append(data.map(function(row) {
        return $('<tr>').append(row.map(function(cell) {
            return $('<td>').html(cell);
        }));
    })));
}


function addRowsBefore(table, data) {
    table.find('tbody').prepend(data.map(function(row) {
        return $('<tr>').append(row.map(function(cell) {
            return $('<td>').html(cell);
        }));
    }));
    return table;
}


function readText(){
  fetch("inputs.txt")
	.then((response) => {
  		return response.text();
	})
	.then((text) => {
  		console.log(text);
      document.getElementById("wordsTxtAra").innerHTML = text;
	});
}



$(function() {
    $('#countWordsBtn').on('click', function(e) {

        var str = $('#wordsTxtAra').val();
        var wordFreq = wordFrequency(str);
        var wordCount = countWords(str);
        var uniqueWords = wordFreq.length;
        var summaryData = [
            [ 'TOTAL', wordCount ],
            [ 'UNIQUE', uniqueWords ]
        ];
        var table = toTable(wordFreq, ['Word', 'Frequency']);
        addRowsBefore(table, summaryData);
        $('#wordFreq').html(table);
    });
});
