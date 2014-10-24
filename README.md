sheer
=====

nodejs express

To create CF

aws cloudformation create-stack --stack-name vpc-demo --template-body file://cfnsheer.json --parameters ParameterKey=KeyName,ParameterValue=sheer ParameterKey=VPCAvailabilityZone1,ParameterValue=us-east-1a ParameterKey=VPCAvailabilityZone2,ParameterValue=us-east-1b --region us-east-1

aws opsworks create-stack --name vpc-demo --stack-region us-east-1 --service-role-arn arn:aws:iam::949018710634:role/aws-opsworks-service-role --default-instance-profile-arn arn:aws:iam::949018710634:instance-profile/aws-opsworks-ec2-role --vpc-id vpc-11bb3874 --default-ssh-key-name sheer --default-subnet-id subnet-c6cc6cb1 --default-os 'Amazon Linux' --default-root-device-type ebs --configuration-manager Name=Chef,Version=11.10 --use-custom-cookbooks --custom-cookbooks-source Type=git,Url=git@github.com:xianfengyuan/cookbooks.git

aws opsworks create-layer --stack-id 559a56ea-1b88-4e72-b5c1-04ca9a98f25d --type custom --name sheerEng --shortname sheer
aws opsworks update-layer --layer-id fd04b5a9-1d41-43da-911c-c2edaf5a146c --auto-assign-public-ips

aws opsworks set-permission --iam-user-arn arn:aws:iam::949018710634:user/xyuan --allow-ssh --allow-sudo --stack-id 559a56ea-1b88-4e72-b5c1-04ca9a98f25d

aws opsworks create-instance --stack-id 559a56ea-1b88-4e72-b5c1-04ca9a98f25d --layer-ids fd04b5a9-1d41-43da-911c-c2edaf5a146c --instance-type t2.micro --os 'Amazon Linux' --hostname sheermount --availability-zone us-east-1a --subnet-id subnet-c5cc6cb2 --ssh-key-name sheer

aws opsworks --region us-east-1 create-app --stack-id 559a56ea-1b88-4e72-b5c1-04ca9a98f25d --name sheer --shortname sheer --type other --app-source Type=git,Url=git@github.com:xianfengyuan/sheer.git,Revision=master

aws opsworks --region us-east-1 update-layer --layer-id fd04b5a9-1d41-43da-911c-c2edaf5a146c --custom-recipes '{"Setup": ["opsworks_nodejs"], "Configure": ["opsworks_nodejs::configure"], "Deploy": ["sheer-deploy::deploy"]}'

