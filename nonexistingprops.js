// Expand on the previous example by adding a boss property to
//  everyone except the owner of the company.
// Change the iteration to print out messages
// in this
// format: `${title} ${name} reports to ${boss}`. For example: Junior Engineer Bob reports to Fred..
// What gets printed out for the owner?
// Adjust the message so that people with no boss
// display "${title} ${name} doesn't report to anybody." - for example, Founder John doesn't report to anybody.

function gimmeObj (name, jobTitle, boss) {
  if (typeof(boss) === "string") {
    return {
      name: `${name}`,
      title: `${jobTitle}`,
      boss: `${boss}`
    }
  }

  return {
    name: `${name}`,
    title: `${jobTitle}`,
  }
}

const obj1 = gimmeObj("Vernon", "Wizard", "God");
const obj2 = gimmeObj("Alder", "King", "Lasagna Monster");
const obj3 = gimmeObj("Trump", "President");

const arr = [obj1, obj2, obj3];

for (let x in arr){
  if (typeof(arr[x].boss) === 'undefined') {
    console.log(`${arr[0].name} ${arr[x].name} reports to nobody.`);
  }

  else {
    console.log(`${arr[x].title} ${arr[x].name} reports to ${arr[x].boss}`);
  }

}
