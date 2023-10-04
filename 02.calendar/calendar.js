function format_days_of_month(date) {
  let days_in_month = new Date(
    date.getFullYear(),
    parseInt(date.getMonth()) + 1,
    0
  ).getDate();
  let first_day_day_of_week = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();
  let month_with_padding = [];
  for (let index = 0; index < first_day_day_of_week; index++) {
    month_with_padding.push("   ");
  }

  for (let index = 1; index <= days_in_month; index++) {
    let spacing = "";
    if (index < 10) {
      spacing = " ";
    }
    month_with_padding.push(spacing + index + " ");
  }

  return month_with_padding;
}

function show_calendar(current_date) {
  let month = current_date.getMonth();
  let year = current_date.getFullYear();

  let formatted_month = format_days_of_month(current_date);

  console.log(" ".repeat(6) + (parseInt(month) + 1) + "月 " + year);
  console.log("日 月 火 水 木 金 土");

  for (let index = 0; index < formatted_month.length; index++) {
    process.stdout.write(formatted_month[index]);
    if ((index + 1) % 7 == 0) {
      console.log("");
    }
  }
}

let argv = process.argv.slice(2);

let current_date = new Date();

let requested_month = current_date.getMonth();
if (argv.includes("-m")) {
  requested_month = parseInt(argv[argv.indexOf("-m") + 1]) - 1;
}
let requested_year = current_date.getFullYear();
if (argv.includes("-y")) {
  requested_year = argv[argv.indexOf("-y") + 1];
}

current_date = new Date(requested_year, requested_month, 1);

show_calendar(current_date);
