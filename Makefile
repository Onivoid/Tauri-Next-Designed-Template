format:
	pnpx prettier --write .

lint:
	pnpm run lint

check: format lint

dev: 
	pnpm tauri dev