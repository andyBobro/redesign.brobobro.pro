export function mergeAppsStrings (str1, str2) {
  const str1Arr = str1.split(',')
  const str2Arr = str2.split(',')

  str2.forEach((str) => {
    if (!str1.includes(str)) {
      str1.push(str)
    }
  });

  return str1
}

export function appsStringDiff (s1, s2) {
  const s1Arr = s1?.split(',')
  const s2Arr = s2?.split(',')
  
  return {
    added: s2Arr && s2Arr.filter((str) => !s1Arr?.includes(str)),
    removed: s1Arr && s1Arr.filter((str) => !s2Arr?.includes(str)),
  }
}

export function removeAppFromAppsString(appStr, strToRemove) {
  const appsSet = new Set(appStr.split(','))
  let result = ''
  
  appsSet.delete(strToRemove)
  
  result = [...appsSet].join(',');
  return result.size ? result : null
}
