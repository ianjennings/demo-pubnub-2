import { describe, expect, it } from "vitest";
import { TestDriver } from "testdriverai/vitest/hooks";

describe("PubNub", () => {
  it("should load the PubNub homepage and verify core elements", async (context) => {
    const testdriver = TestDriver(context);

    await testdriver.provision.chrome({ url: "https://www.pubnub.com" });

    const logo = await testdriver.find("PubNub logo");
    expect(await logo.found()).toBeTruthy();

    const startFree = await testdriver.find("Start Free button");
    expect(await startFree.found()).toBeTruthy();
  });

  it("should navigate to the documentation page", async (context) => {
    const testdriver = TestDriver(context);

    await testdriver.provision.chrome({ url: "https://www.pubnub.com/docs" });

    const searchOrHeading = await testdriver.find("Documentation search bar or header");
    expect(await searchOrHeading.found()).toBeTruthy();
  });
});
