// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { UserInfo } from 'sveltekit-keyloak-multitenant';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: UserInfo | null,
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
