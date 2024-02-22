export function emailRedirect(): void {
  const emailAddress = "jzubiate.dev@gmail.com";
  const subject = "🤙 I am looking for a developer. Let's talk!";

  const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
    subject
  )}`;

  window.location.href = mailtoUrl;
}
