const btnNext = document.querySelector('#next');
const btnCalc = document.querySelector('#calc');

const array = [];

btnNext.addEventListener('click', function (e) {
  e.preventDefault();

  const electoralname = document.querySelector('#electoralName');
  const isCoalition = document.querySelector('#isCoalition');
  const numberOfVotes = document.querySelector('#numberOfVotes');
  const electoralList = document.querySelector('#electoralList');
  const results = document.querySelector('#results');
  // const percentage ;

  const isCoalitionvalid() {

  }


  const object = {
    electoralname: electoralname.value,
    isCoalition: isCoalition.value,
    numberOfVotes: numberOfVotes.value,
  };

  electoralList.innerHTML += `<li><b>${electoralname.value}</b>, ${isCoalition.value}, ilość głosów:${numberOfVotes.value}</li>`;

  array.push(object);

  console.log(isCoalition.value);
  console.log('-----------------');
  console.log(object);
});

btnCalc.addEventListener('click', function (e) {
  e.preventDefault();

  results.innerHTML += `
  
    <table>
            <tr>
              <th>Miejsce</th>
              <th>Nazwa ugrupowania</th>
              <th>Próg wyborczy</th>
              <th>Ilość głosów</th>
              <th>Wynik procentowy</th>
            </tr>
            <tr>
              <td>1</td>
              <td>${electoralname.value}</td>
              <td>${isCoalition.value}</td>
              <td>${numberOfVotes.value}</td>
              <td>34,7%</td>
            </tr>
  
          </table>`;
});
