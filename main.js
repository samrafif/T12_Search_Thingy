const dataTable = document.getElementById("data-table");
const searchInput = document.getElementById("search-input");
const upArrow = document.getElementById("up");

var data = [
  {
    idx: 1,
    name: "Danish Mulyana",
    score: 50,
  },
  {
    idx: 2,
    name: "Raihan Ubaidilah",
    score: 95,
  },
  {
    idx: 3,
    name: "Sugiono",
    score: 67,
  },
  {
    idx: 4,
    name: "Budiono",
    score: 87,
  },
  {
    idx: 5,
    name: "Asep",
    score: 35,
  },
  {
    idx: 6,
    name: "Nayaka",
    score: 10,
  },
  {
    idx: 7,
    name: "Wahyu Ramadhan",
    score: 78,
  },
  {
    idx: 8,
    name: "Indah Kusuma",
    score: 83,
  },
  {
    idx: 9,
    name: "Putri Amelia",
    score: 92,
  },
  {
    idx: 10,
    name: "Fahmi Fauzan",
    score: 61,
  },
  {
    idx: 11,
    name: "Siti Rahmah",
    score: 47,
  },
  {
    idx: 12,
    name: "Fikri Zulkarnain",
    score: 55,
  },
  {
    idx: 13,
    name: "Taufik Hidayat",
    score: 42,
  },
  {
    idx: 14,
    name: "Zahra Andini",
    score: 90,
  },
  {
    idx: 15,
    name: "Rizky Ramadhan",
    score: 73,
  },
  {
    idx: 16,
    name: "Desi Nurjanah",
    score: 81,
  },
  {
    idx: 17,
    name: "Ahmad Fadli",
    score: 29,
  },
  {
    idx: 18,
    name: "Aulia Putri",
    score: 64,
  },
  {
    idx: 19,
    name: "Budi Santoso",
    score: 88,
  },
  {
    idx: 20,
    name: "Citra Puspa",
    score: 53,
  },
];

var sorted = true;

function updateUI(dataGiven) {
  const children = document.querySelectorAll(".data-table-data");

  for (let index = 0; index < children.length; index++) {
    dataTable.removeChild(children[index]);
  }

  console.log(children);

  for (let index = 0; index < dataGiven.length; index++) {
    const element = dataGiven[index];
    const trOuter = document.createElement("tr");
    const tdEls = [
      document.createElement("td"),
      document.createElement("td"),
      document.createElement("td"),
    ];

    tdEls[0].innerText = element.idx;
    tdEls[1].innerText = element.name;
    tdEls[2].innerText = element.score;

    for (let index = 0; index < tdEls.length; index++) {
      trOuter.appendChild(tdEls[index]);
    }

    trOuter.className = "data-table-data";
    dataTable.appendChild(trOuter);
  }
}

function sortNames(event) {
  let old = data;
  let given = data.sort((a, b) => a.score - b.score);

  if (sorted) {
    data.reverse();
  }

  upArrow.classList.toggle("rotated");
  sorted = !sorted;

  data = old;

  updateUI(given);
}

function searchNames(event) {
  let searchStr = searchInput.value;

  updateUI(
    data.filter((val, idx, arr) => {
      return val.name.toLocaleLowerCase().includes(searchStr) ? val : null;
    })
  );
}

upArrow.classList.toggle("rotated");
updateUI(data);
