function stringChop(str, len) {
 //  let chunks=[];
	// for(let i=0;i<str.length;i+=size){
	// 	chunks.push(str.slice(i,i+size));	}
	// return chunks;
  // create an empty array to store the chunks
  let chunks = [];
  // loop through the string with a step size of len
  for (let i = 0; i < str.length; i += len) {
    // slice the string from i to i + len and push it to the array
    chunks.push(str.slice(i, i + len));
  }
  // return the array of chunks
  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));