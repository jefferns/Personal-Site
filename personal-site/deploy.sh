echo "Switching to branch 'main'..."
git checkout main

echo "Building App..."
npm run build

echo "Deploying App..."
scp -r dist/* nick@192.168.1.2:/var/www/jefferis.dev/

echo "Deploy Complete"