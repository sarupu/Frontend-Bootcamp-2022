// datayı alıp konsola yazdırdığımız fonksiyonun tanımlanması
async function dataModifiedByGroup() {
  // dışardan aldığımız datayı fetch ettim
  const data = await fetch("./data.json")
    .then(response => response.json())

  // reduce kullanarak dataModified adında bir 0bje variable'ı oluşturdum
    const dataModified = await data.reduce((acc, curr) => {
    if (acc[curr.group]) {
      acc[curr.group].push(curr)
    } else {
      acc[curr.group] = [curr]
    }

    return acc;
  }, {})
  // oluşturduğum variable'ı konsola yazdırdım
  console.log(dataModified)

  // asenkron bir fonksiyon tanımladığım diğer tanımladığım fonksiyonu ilk tanımladığım fonksiyonun içinde çağırdım
  groupAssistantFinder(dataModified)
  return dataModified
}

// ilk fonksiyonu çağırdım
dataModifiedByGroup()

// ikinci fonksiyonu tanımladım
function groupAssistantFinder(dataModified) {
  // yeni oluşturduğum objenin keylerinden bir array oluşturdum
  const groupNameArray = Object.keys(dataModified)

  // key arrayini foreach kullanarak döndürdüm
  groupNameArray.forEach((group) => {
    dataModified[group].forEach((student) => {
      if (student["assistant"] === false) {
        return
      }
      // konsola ikinci fonksiyonun çıktısını yazdırdım
      console.log(`Assistant of group ${group} is ${student["name"]}`)
    });
  })
}
