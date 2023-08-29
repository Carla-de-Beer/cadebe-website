const core = require('@actions/core');
const exec = require('@actions/exec');

const main = () => {
    const bucket = core.getInput('bucket', {required: true});
    const bucketRegion = core.getInput('bucket-region', {required: true});
    const distFolder = core.getInput('dist-folder', {required: true});

    const bucketUri = `s3://${bucket}`;
    exec.exec(`aws s3 sync ${distFolder} ${bucketUri} --region ${bucketRegion}`)
        .then(r => core.notice('Deployment done'));
}

main();
