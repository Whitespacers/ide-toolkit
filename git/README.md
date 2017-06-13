# Using Git hooks

Git hooks are predefined shell scripts that run during certain Git events. The following hooks are available for use:

| Hook         | Invocation | Description
| ---          | ---        | ---
| `pre-commit` | Invoked each commit. | Runs eslint.

If you want to use a hook, copy the file to your `.git/hooks` path within the project. Any existing tools available to the hook will then be invoked with the hook itself.