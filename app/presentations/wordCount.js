angular.module('wordCountCtr', [])
.controller('wordController', function(){
  var wordController = this;
  wordController.CharacterLength = 0;

  wordController.WORDS_MAXIMUM = 250;

  wordController.WordsLength=0;
  wordController.Text = "";
  wordController.FontStyle={'color':'red'};

  wordController.UpdateLengths = function($event){
    {
           wordController.CharacterLength = wordController.Text.length;
           wordController.WordsLength=0;
           if(wordController.Text.length == 1 && wordController.Text[0]!=' ')
           {
               wordController.WordsLength = 1;
           }

           for( var i=1; i< wordController.Text.length; i++)
           {
               if( wordController.IsAlphabet(wordController.Text[i])  && !wordController.IsAlphabet(wordController.Text[i-1]))
               {
                   wordController.WordsLength++;
                   if(wordController.WordsLength == WORDS_MAXIMUM + 1)// WORDS_MAXIMUM = 10
                   {
                       wordController.WordsLength--;
                       wordController.Text = wordController.Text.substring(0, i);
                       return;
                   }
               }else if (wordController.IsAlphabet(wordController.Text[i]) && wordController.IsAlphabet(wordController.Text[i-1]) )
               {
                   if(wordController.WordsLength==0)
                   {
                       wordController.WordsLength=1;
                   }
               }else if(!wordController.IsAlphabet(wordController.Text[i]) && !wordController.IsAlphabet(wordController.Text[i-1]))
               {
                   continue;
               }else if(!wordController.IsAlphabet(wordController.Text[i]) && wordController.IsAlphabet(wordController.Text[i-1]))
               {
                   continue;
               }
           }
  }

  wordController.IsAlphabet = function(character){
    var numeric_char = character.charCodeAt(character);

    if(numeric_char>64 && numeric_char<91){/ A-Z
      return true;
    }
    if(numeric_char>96 && numeric_char<123){// a-z
      return true;
    }
    return false;
  }

});
