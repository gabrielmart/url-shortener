import validateUrl from "../../functions/validate-url";

const badFormatUrls = [
  "http:/example.com",
  "https//example.com",
  "htp://example.com",
  "http://",
  "https://example",
  "http://256.256.256.256",
  "http://exa mple.com",
  "http://example!.com",
  "https://example.com:abc",
  "https://example.com:8080:90",
  "http://.example.com",
  "http://example..com",
  "http://-example.com",
  "http://example-.com",
  "http:///path",
  "http://example.com/pa th",
  "https://example.com?query with space",
];

const extraBadUrls = [
  "htttp://example.com",
  "http://exam$ple.com",
  "http://example.com: 80",
  "http://example .com",
];

const goodUrls = [
  "http://example.com",
  "https://example.com",
  "http://example.com/",
  "https://example.com/path",
  "https://example.com/path/to/resource",
  "http://example.com:8080",
  "https://example.com?query=string",
  "https://example.com#fragment",
  "http://123.45.67.89",
  "https://sub.domain.example.com",
  "http://example.co.uk",
];

const edgeCaseUrls = [
  "http://example.com:0",
  "http://example.com:65535",
  "https://example.com/path?name=John%20Doe&age=30#bio",
];

describe("validateUrl", () => {
  it("should return false for an empty url", () => {
    expect(validateUrl("")).toBe(false);
  });

  it("should return false for url protocols different from http or https", () => {
    expect(validateUrl("ftp://example.com")).toBe(false);
  });

  it.each(badFormatUrls)("should return false for bad URL: %s", (url) => {
    expect(validateUrl(url)).toBe(false);
  });

  it.each(extraBadUrls)("should return false for invalid URL: %s", (url) => {
    expect(validateUrl(url)).toBe(false);
  });

  it.each(goodUrls)("should return true for valid URL: %s", (url) => {
    expect(validateUrl(url)).toBe(true);
  });

  it.each(edgeCaseUrls)("should return true for edge case URL: %s", (url) => {
    expect(validateUrl(url)).toBe(true);
  });

  it("should allow encoded spaces in path and query", () => {
    expect(
      validateUrl("https://example.com/path%20with%20spaces?q=some%20query"),
    ).toBe(true);
  });

  it("should return false for null or undefined", () => {
    expect(validateUrl(null as unknown as string)).toBe(false);
    expect(validateUrl(undefined as unknown as string)).toBe(false);
  });
});
