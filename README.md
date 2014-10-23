sheer
=====

nodejs express

To create CF

aws cloudformation create-stack --stack-name vpc-demo --template-body file://cfnsheer.json --parameters ParameterKey=KeyName,ParameterValue=sheer ParameterKey=VPCAvailabilityZone1,ParameterValue=us-east-1a ParameterKey=VPCAvailabilityZone2,ParameterValue=us-east-1b --region us-east-1
