function $(id) {
  return document.getElementById(id);
}

function formatDays(days) {
  const formatted = days.toFixed(2);
  return formatted;
}

function handleSubmit(event) {
  event.preventDefault();
  const totalPages = $("total-pages").valueAsNumber;
  const dailyPages = $("daily-pages").valueAsNumber;
  const days = totalPages / dailyPages;
  const formattedDays = totalPages % dailyPages === 0 ? days : days.toFixed(2);
  $("output").innerText = `
It should take you ${formattedDays} days to read all ${totalPages} pages (at the rate of ${dailyPages} pages per day).
`;
}

$("form").onsubmit = handleSubmit;
