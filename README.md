# Pantree

## Team Schedule:

*Expected daily meeting:* 9am stand-up

**Fai:** Not after 7pm, Sunday off.      
**BenM:** Not after 6:30, Saturday off.     
**Joe:** Not after 6:30, try not to work on weekend.    
**Jefferson:** Late is fine, Tuesday 21st off.  
**Aisyah:** Not after 7:30, Sunday off.   
**Rose:** Not after 7, can work weekend but need atleast half day off.    

*4pm fun time*       
*Check-in before weekend, get rest and not burn out*

## Stress Profiles:
**Fai**      
***Stress Sign:***       
I go silent and become a little withdrawn.    

***What to do:***
Give me space, but keep me up to date with anychanges if they happen.    

**BenM**      
***Stress Sign:***       
When I feel stressed my mouth works faster than my brain. My tells are that I bite my fingers and play with my earring.    

***What to do:***
I need someone to check in and tell me to go for a walk.     

**Joe**      
***Stress Sign:***       
When I feel stressed I sigh a lot and go kinda quiet.    

***What to do:***
I need someone to check in and tell me to take a breather.    

**Jefferson**     
***Stress Sign:***       
I go silence and go for a wander —if I do, I’ll let the team know.    

***What to do:***
If I’m pair up, maybe let me know to take a breath if it’s too obvious.     

**Aisyah**      
***Stress Sign:***       
   

***What to do:***
   

**Rose**      
***Stress Sign:***       
I become quiet, my typing gets worse than normal and I trial and error lots of things.   

***What to do:***
I need someone to tell me to go for a walk or for someone to take over typing for me.   

## Team Roles:

**P.O.:** Joe
- Customer perspective
- Doubles as the project lead
- SCRUM master
- Keep product ducumentation up to date

**Git Floater:** Fai
- Knowing where everyone is at with the code
- Guiding when conflict arise
- Deals with issues after code is written in GitHub
- Making sure that the person responsible deals with the conflict
- Deployment

**Vibes/Fun checker:** Jefferson
- Be aware of the state of the group and individuals
- Call out when the vibe is not good
- Respond appropriately when someone's vibe drops
- Stop everyone at 4pm to make sure team has some fun

**Teach Lead:** BenM (frontend) / Rose (backend)
- Making sure that everyone follows set conventions
- Leads solve technical problems during the coding process, first port of call, does not need to be the expert
- Keeping technical documentation up to date
- Final call on technical decisions/ approaches/ standardization

**Co-helper:** Aisyah
- Float
- Pitch in when needed/available

## Git Branching Strategy:
- Master = Deploy
- Development = pull, fetch
- 'branch_name' = feature currently working on
- All members to solve own conflict if able
- Branch creater deletes the branch once feature is finished
- Talk to Git master if there is a problem
- Let Git master know once code has be reviewed
- Git master to merge major feature


## DB (Server Side)

### recipes
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | recipe | String |
  | image | String |
  | method | String |
  
### recipes_ingredients (Join M2M)

  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | quantity | Interger |
  | recipe_id | Interger |
  | ingredient_id | Interger |

### ingredients

  Many Users attend Many Meetings

 | Column Name | Data Type |
 | --- | --- |
 | id | Integer |
 | name | String |
 | unit | String |

 ---
