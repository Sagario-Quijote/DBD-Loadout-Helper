const killers = document.querySelectorAll('.killer');
const body = document.querySelector('body');
const killerContainer = document.querySelector("killerContainer")

      killers.forEach(killer => {
        killer.addEventListener('click', () => {
            killer.classList.toggle("enlargeblur");
        });
      });