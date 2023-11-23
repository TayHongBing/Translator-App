const translations = {
  "malay": {
    "english": {
      "pagi": "morning"
    },
    "french": {
      "pagi": "matin"
    }
  },
  "spanish" :{
    "english": {
      "buenos dias": "morning"  
    },
    "french": {
      "buenos dias": "bonjour"
    }
  },
};

export function translate(source, target, text) {
  if (translations[source][target][text]) {
    return translations[source][target][text];
  } 
  return "Not found";
}