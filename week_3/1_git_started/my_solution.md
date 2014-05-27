## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
	Makes Git aware of new file "snapshots" in the repository.

#### branch
	This allows you to work on the same project with multiple collaborators but keep working on your own seperate part off of the master file.

#### checkout
	This allows you to move from one repostitory to another, or from branch to braanch. 

#### clone
<!-- Your defnition here -->

#### commit
	Once a file's snapshot is added, this command pushes it through to your local GitHub repository. You write "commit -m" (-m for message) then insert a message regarding what that specific screenshot is.

#### fetch
	This gets all the files from the remote repository that aren't in your local one. Similar to when you commit a file's snapshot to your local repository and the push it to the remote repository, you use fetch to get information on the other side: you need to fetch the new snapshots and then pull them from the remote repository into your local one.

#### log
	This shows your commit history. You can use it to see what files/snapshots of the files you've added, committed, pushed, pulled, merged, etc.

#### merge
	This puts the changes you made on your seperate branches into the master branch. That way, if you're working on a project with various people working on seperate areas of the code, everyone can now have the updated master code.

#### pull
	This is the inverse of git merge: it takes the updated files from the remote repository and merges it with your local one. This would be good in the case of things like DBC where, when an update is made to the master, we want it to be reflected in our local repository.

#### push
	This puts your updated, committed file snapshots onto the online GitHub repository so it can be accessed by others on different computers.

#### reset
	Reverts your index/directory to how it was at your last commit. This would be good if you needed to undo a commit that you made.

#### rm
	This allows you to remove a file from the index/branches/working tree(and then commit the file removal) to Git. You would use this if you no longer needed a file.

#### status
	This allows you to check what files are in the repository and the status of each of them (whether they need to be committed or pushed)

## Release 4: Git Workflow

- Push files to a remote repository
- Fetch changes
- Commit locally

## Release 5: Errors you encountered
1. Error
	I tired to type in "git command fetch upstream" after the origin/upstream files came up. The error was an "Unkown subcommand: fetch" -- looks like it doesn't know that!
2. Solution
	"Git remote ADD upstream" use add instead of fetch
3. Cause (explain the error)
	We need to make the computer aware of the remote repository files before we can actually pull them. It also doesn't read the word fetch.

## Release 6: Reflection

	It helped to have a bash/command line glossary on hand, to make sure I really understood every command. This one worked well:  http://www.westwind.com/reference/os-x/commandline/navigation.html
