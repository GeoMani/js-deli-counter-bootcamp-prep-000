function takeANumber(deliLine, name) {
  deliLine.push(`${name}`)
  let i = deliLine.indexOf(name)+1
  return `Welcome, ${name}. You are number ` + i + ` in line.`
}

function nowServing(deliLine) {
  if(deliLine.length > 0) {
    return (`Currently serving ${deliLine.shift()}.`)
  }   else {return `There is nobody waiting to be served!`;
      }
  
}

function currentLine(deliLine) {
  
  }
}