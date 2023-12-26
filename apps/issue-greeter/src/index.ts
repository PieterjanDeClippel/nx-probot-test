import { greeter } from '@example/greeter';
import { Probot } from 'probot';

export = (app: Probot) => {
  app.on('issues.opened', async (context) => {
    // const lib = await eval("import('@example/greeter')");
    // const lib = require('@example/greeter');
    const issueComment = context.issue({
      // body: lib.greeter(),
      body: greeter(),
    });
    await context.octokit.issues.createComment(issueComment);
  });
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
