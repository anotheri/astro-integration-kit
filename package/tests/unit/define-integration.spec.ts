import { type Mock, afterEach, describe, expect, test, vi } from "vitest";
import { defineIntegration } from "../../src/core/define-integration.js";

describe("defineIntegration", () => {
	afterEach(() => {
		vi.resetAllMocks();
	});

	test("Should run", () => {
		const name = "my-integration";
		const setup = () => ({});

		expect(() =>
			defineIntegration({
				name,
				setup,
			}),
		).not.toThrow();
	});

	test("Setup should get called", () => {
		const name = "my-integration";
		const setup = vi.fn(() => {
			return {};
		});

		defineIntegration({
			name,
			setup,
		})();

		expect(setup).toBeCalled();
	});

	test("Setup should get called with correct name", () => {
		const name = "my-integration";
		const setup = vi.fn(() => {
			return {};
		});

		defineIntegration({
			name,
			setup,
		})();

		const callArgs = (setup as Mock).mock.lastCall[0];

		expect(callArgs.name).toBe(name);
	});

	test.skip("Setup should get called with default args", () => {
		const name = "my-integration";
		const setup = vi.fn(() => {
			return {};
		});

		defineIntegration({
			name,
			// optionsSchema,
			setup,
		})();

		// const callArgs = setup.mock.lastCall?.[0];
		// expect(callArgs?.options).toEqual(defaults);
	});

	test.skip("Setup should get called with overwritten args", () => {
		const name = "my-integration";
		const setup = vi.fn(() => {
			return {};
		});

		const expectedOptions = {
			foo: "baz",
		};

		defineIntegration({
			name,
			// optionsSchema,
			setup,
			// @ts-ignore
		})(expectedOptions);

		// const callArgs = setup.mock.lastCall?.[0];
		// expect(callArgs?.options).toEqual(expectedOptions);
	});

	test("Integration should have correct name", () => {
		const name = "my-integration";
		const setup = vi.fn(() => {
			return {};
		});

		const integration = defineIntegration({
			name,
			setup,
		})();

		expect(integration.name).toBe(name);
	});
});
