. _deploy/scripts/setenv.sh

echo $STAGE
sam deploy \
  --template-file packaged.yml \
  --stack-name $PROJECT_NAME-$STAGE \
  --capabilities CAPABILITY_IAM CAPABILITY_AUTO_EXPAND \
  --profile $PROFILE