PROJECT_NAME=cfn-lambda-execute
STAGE=mnolan    # used for personal development only...override if >2 people using this
PROJECT_SOURCE_BUCKET=0
PROFILE=0


# Override the defaults using a user script
if [ -e ~/.cfn-lambda-execute.sh ]; then
    echo "User override file exists"
    . ~/.cfn-lambda-execute.sh
fi