const form = document.getElementById('quoteForm');
const fallbackBox = document.getElementById('quoteFallback');
const whatsAppQuoteLink = document.getElementById('whatsAppQuoteLink');
const emailQuoteLink = document.getElementById('emailQuoteLink');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = data.get('name')?.toString().trim() || '';
    const contact = data.get('contact')?.toString().trim() || '';
    const suburb = data.get('suburb')?.toString().trim() || '';
    const property = data.get('property')?.toString().trim() || '';
    const service = data.get('service')?.toString().trim() || '';
    const time = data.get('time')?.toString().trim() || '';
    const message = data.get('message')?.toString().trim() || '';

    const bodyLines = [
      'Hello, I would like a cleaning quote.',
      '',
      `Name: ${name}`,
      `Contact: ${contact}`,
      `Suburb: ${suburb}`,
      `Property Details: ${property}`,
      `Service Type: ${service}`,
      `Preferred Time: ${time}`,
      '',
      'Message:',
      message,
      '',
      'I can send photos separately if needed.',
      '如需要，我也可以另外发送照片。'
    ];

    const body = bodyLines.join('\n');
    const subject = `Quote Request - ${service || 'Cleaning Service'}`;
    const mailto = `mailto:tidytruecleaningltd@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const whatsappText = `Hello, I would like a cleaning quote.%0A%0AName: ${encodeURIComponent(name)}%0AContact: ${encodeURIComponent(contact)}%0ASuburb: ${encodeURIComponent(suburb)}%0AProperty: ${encodeURIComponent(property)}%0AService: ${encodeURIComponent(service)}%0APreferred Time: ${encodeURIComponent(time)}%0A%0AMessage:%0A${encodeURIComponent(message)}`;
    const whatsappUrl = `https://wa.me/6421579288?text=${whatsappText}`;

    if (fallbackBox && whatsAppQuoteLink && emailQuoteLink) {
      fallbackBox.hidden = false;
      whatsAppQuoteLink.href = whatsappUrl;
      emailQuoteLink.href = mailto;
    }

    const tempLink = document.createElement('a');
    tempLink.href = mailto;
    tempLink.style.display = 'none';
    document.body.appendChild(tempLink);
    tempLink.click();
    tempLink.remove();
  });
}
