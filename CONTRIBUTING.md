# HOW TO CONTRIBUTE?

*" Today I've a mission! I've to develop the next coolest feature of Curb!  
A button to change the language on the homepage for my Chinese :cn: friends!  
However, big features involves great responsibilities! Here they're... "*  

## 1. Issues

*" First of all, I've to create an issue. An issue is used to reference  
either a bug to fix, either a feature to develop. In my case it's a feature.  
To do so, I've to go in the relevant repository, in the \"**Issues**\" section.  
From there, I've to click on \"**New Issue**\", then fill the following informations... "*

### 1.1. Title (Required)  

* Length: >15 words.
* Capitalisation: Capitalise.
* Content: Explicit.
* EndOfLine: Dot.

**Example**:  
```
Create button on homepage for i18n.
```

### 1.2. Comment (Optional)

* Length: >80 words.
* Capitalisation: Capitalise.
* Content: Explications, Ressources.

**Example**:  
```
```

### 1.3. Assignees (Required)

* NumberOfPeople: <1 people.

**Example**:
```
```

### 1.4) Labels

**[enhancement]**: New feature or request.   
**[bug]**: Something isn't working.  
**[help wanted]**: Extra attention is needed.  

### 1.5) Projects

Repository's project.  

**Examples**:  
> Repository -> curb, Project -> curb.  

## 2) Projects

### 2.1) inReflexion

This column is dedicated for the proposal of new ideas.   
The goal is to sort them every X time to keep the good ideas.  

### 2.2) toDo (Automatic)

This column is dedicated for tasks to be done.  
The goal is to keep a pending list of tasks.  
To assign yourself a task, drag her to the **"inProgress"** column.  

### 2.3) inProgress

This column is dedicated for tasks in development.  
The goal is to keep a list of tasks that people are currently working on.  
To notify that you are done with a task, drag her to the **"toTest"** column.  

### 2.4) toTest

This column is dedicated for tasks currently tested.  
The goal is to keep a list of tasks that people are currently testing.  
To pass to the colums **"toDeploy"**, you must first validate the conditions described in : [...]  

### 2.5) toDeploy

...

### 2.6) Done (Automatic)

...

## 3) Git

### 3.1) Branches

To create a branch :  
``` git checkout -b ${BRANCH_NAME} ```  

${BRANCHE_NAME} :
- ~~master~~
- hotfixes/${VERSION_ID} :lock:
- releases/${VERSION_ID} :lock:
- ~~develop~~
- features/${ISSUE_ID} 

:warning: Don't create new branch on bugs issues, re-open.  :warning: 

To switch branch :  
``` git checkout ${BRANCH_NAME} ```  

### 3.2) Commits

To commit:  
``` git commit -m "${COMMENT} #${ISSUE_ID}" ```

${COMMENT}: (Optional)
- Nothing Special; UpperCase; Precise;<15 words.

${ISSUE_ID}:  
- '#' + IssueId.

To push:  
``` git push origin ${BRANCH_NAME} ```  

:warning: Never push on **master** and **develop**.  :warning:  

### 3.2) PRs (1PR == 1ISSUE) 
 
- **Title**: Same as Issue Title + #{ISSUE_ID}  
- **Review**: All  
- **Assignees**: Same as Issue  


## 4) Development

### 4.1) Visual Code

#### Required:
- **Eslint**:

- **Prettier**:

#### Optional:

### 4.2) Comments









