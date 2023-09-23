const core = require('@actions/core');
const exec = require('@actions/exec');

const main = () => {
    const bucket = core.getInput('bucket', {required: true});
    const bucketRegion = core.getInput('bucket-region', {required: true});
    const artifactFolder = core.getInput('artifact-folder', {required: true});

    const bucketUri = `s3://${bucket}`;
    exec.exec(`aws s3 sync ${artifactFolder} ${bucketUri} --region ${bucketRegion}`)
        .then(() => core.notice('Deployment to S3 completed'))
        .catch((error) => core.error(`Deployment was unsuccessful due ro error ${error}`));
}

main();
