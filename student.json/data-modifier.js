
async function dataModifiedByGroup() {
  const data = await fetch("./data.json")
    .then(response => response.json())

  const dataModified = await data.reduce((acc, curr) => {
    if (acc[curr.group]) {
      acc[curr.group].push(curr)
    } else {
      acc[curr.group] = [curr]
    }

    return acc;
  }, {})
  console.log(dataModified)

  groupAssistantFinder(dataModified)
  return dataModified
}

dataModifiedByGroup()

function groupAssistantFinder(dataModified) {
  const groupNameArray = Object.keys(dataModified)

  groupNameArray.forEach((group) => {
    dataModified[group].forEach((student) => {
      if (student["assistant"] === false) {
        return
      }
      console.log(`Assistant of group ${group} is ${student["name"]}`)
    });
  })
}
