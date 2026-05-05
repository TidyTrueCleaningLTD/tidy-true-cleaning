const form = document.getElementById('quoteForm');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = form.querySelector('input[type="text"]')?.value?.trim() || '';
    const contact = data.get('contact')?.toString().trim() || '';
    const suburb = data.get('suburb')?.toString().trim() || '';
    const property = data.get('property')?.toString().trim() || '';
    const service = data.get('service')?.toString().trim() || '';
    const time = data.get('time')?.toString().trim() || '';
    const message = data.get('message')?.toString().trim() || '';

    const body = [
      '您好，想咨询清洁报价：',
      '',
      `姓名 / Name: ${name}`,
      `联系方式 / Contact: ${contact}`,
      `区域 / Suburb: ${suburb}`,
      `房型 / Property Details: ${property}`,
      `服务类型 / Service Type: ${service}`,
      `希望时间 / Preferred Time: ${time}`,
      '',
      '现场情况 / Message:',
      message,
      '',
      '如有现场照片，我会另行补发。'
    ].join('\n');

    const subject = encodeURIComponent(`Quote Request - ${service || 'Cleaning Service'}`);
    const mailto = `mailto:tidytruecleaningltd@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
}
