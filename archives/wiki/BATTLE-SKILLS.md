### [<< Return To Index](https://github.com/ZiDiZhu/speculative-2/wiki/%5BProject-ORB%5D-%E2%80%90-Index)

Each skill has the following properties:

Static:
- Base HP Change: Damage/Heal on the action target value independent to the skill holder.
- AP Cost:  How much it takes to perform this action.
- Base Hit Rate: The likelihood of action successfully performed.

Dynamic:
- Hit Chance: Likelihood of action not missing.
- Critical Hit chance: Likelihood of HP change being multiplied.
- Target: One or more characters who receives the action.

Outcome:
- Missed: No effect. Has AP cost.
- Hit: Took effect as intended.
- Critical Hit: Took effect
- Reflected: If it's a hit and target reflected, you take the hit instead.
- Deflected: If it's a hit and target deflected, a random member from the target's opposition party takes the hit.

# Classes of Battle Skills: 

## [1. Attack]()
Dynamic hit can be divided in number of hits. Each hit's damage is calculated separately at run time. the number of hits applies to (each) single target.
### Target type: All-Enemy, One Enemy, Random Enemy, All-member, One member

## [2. Defense]()
- #### Dodge: Lower the hit chance if you are the target of an attack.
- #### Protect: Protect another party member if they are the target of attack. You suffer the damage instead, and has a chance of striking the enemy.
- #### Reflect: The effects of actions targeted towards you will apply to the actor instead.
- #### Deflect: The effects of actions targeted towards you will apply to a random member of the opposite party.
*Actions that are reflected / deflected keeps its original stat and ignores the new target's stats. <br>
*Deflected action can be reflected / deflected again.

## [3. Heal]()
- #### CPR: Rescue a party member who was killed in the same turn back to minimum hp.
- #### Blood Transfer: Transfer HP from one party member to another.

## [4. Bluff](https://github.com/ZiDiZhu/speculative-2/wiki/BLUFFING) 
A unique class of actions which, by temporarily changing your characters' stats in order to influence the RNG during battle. Extremely powerful but comes with deadly risks. Has a "set" action, and a "reset" action to reverse its effects.
- #### Fake Death: Fake being "dead" to avoid being the target of attacks. 
- #### Blood letting: Deduct your own HP to trick enemies to use lighter attacks, then add back hp lost at the end of turn.

## [5. Enquire]()
A class of action that makes enemies' private data accessible.
- #### Analyze: Make enemy' stats, skills and inventory visible.
- #### Predict: See which actions the target will execute next turn.
- #### Steal: Get item from enemy's inventory.


Related Articles:
- [Enemy Personality Types](https://github.com/ZiDiZhu/speculative-2/wiki/Enemy-Personality-Types)