function saturdayFun(activity="roller-skate") {
  return`This Saturday, I want to ${activity}!`;
}

function mondayWork (activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(parent="*"){
    return function (para1="special"){
        return `You are ${parent}${para1}${parent}!`;
    }

}