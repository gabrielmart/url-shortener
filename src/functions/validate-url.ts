const validateUrl = (url: string): boolean => {
  // Reject if the URL contains any whitespace characters
  if (/\s/.test(url)) {
    return false;
  }

  try {
    // Parse the URL using the built-in URL constructor
    const parsed = new URL(url);

    // Allow only 'http:' or 'https:' protocols
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      return false;
    }

    // Ensure the original URL string starts with "http://" or "https://"
    if (!/^https?:\/\/.+/.test(url)) {
      return false;
    }

    // Validate hostname:
    // - It should be a valid domain name (letters, digits, hyphens, and dots)
    // - Or a valid IPv4 address
    const hostname = parsed.hostname;
    const hostnameRegex = /^([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+[a-zA-Z]{2,}$/;
    const ipv4Regex =
      /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/;

    if (!(hostnameRegex.test(hostname) || ipv4Regex.test(hostname))) {
      return false;
    }

    // If all checks pass, the URL is valid
    return true;
  } catch {
    // If parsing throws an error, the URL is invalid
    return false;
  }
};

export default validateUrl;
