# Git Basics

Clone single branch from repo

```bash
git clone -b <branch name> --single-branch <repo-url> <folder name>`
```

Fetch another remote branch after a single-branch clone

```bash
git remote set-branches --add origin <remote-branch-name>
git fetch origin <remote-branch-name>:<local-branch-name>
```

Squash and interactive rebase (can `pick`, `squash` or `reword` individual commits)

```bash
# Rebase from current branch
git rebase -i HEAD~[number of commits]

# Rebase from a different branch
git checkout <main-branch-name>
git pull origin
git checkout <dev-branch-name>
git rebase -i <main-branch-name>
```

Force push to remote branch to overwrite history

```bash
git push origin <branch-name> --force
```

Force pull to local branch overwrite history

```bash
git fetch --all  # update all branches
git checkout -b backup-master
git reset --hard origin/master
```

Undo commits

```bash
# soft is reversible
git reset --soft HEAD~n
# hard is irreversible
git reset --hard HEAD~n
```

Check diff between current and history

```bash
git show HEAD~1
git show <COMMIT>
```

Go to a specific commit and be in a detached state

```bash
git checkout -b <new-branch-name> <SHA1>
```

One-liner git log alias to `git prettylog`

```bash
git config --global alias.prettylog "log --all --decorate --oneline --graph"
```