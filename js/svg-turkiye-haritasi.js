function svgturkiyeharitasi() {
  const element = document.querySelector('#svg-turkiye-haritasi');
  const info = document.querySelector('.il-isimleri');

  element.addEventListener(
    'mouseover',
    function (event) {
      if (event.target.tagName === 'path' && event.target.parentNode.id !== 'guney-kibris') {
        info.innerHTML = [
          '<div>',
          event.target.parentNode.getAttribute('data-iladi'),
          '</div>'
        ].join('');
      }
    }
  );

  element.addEventListener(
    'mousemove',
    function (event) {
      info.style.top = event.pageY + 25 + 'px';
      info.style.left = event.pageX + 'px';
    }
  );

  element.addEventListener(
    'mouseout',
    function (event) {
      info.innerHTML = '';
    }
  );

  element.addEventListener(
    'click',
    function (event) {
      if (event.target.tagName === 'path') {
        const parent = event.target.parentNode;
        const id = parent.getAttribute('id');

        if (
          id === 'guney-kibris'
        ) {
          return;
        }

        window.location.href = (
          '#'
          + id
          + '-'
          + parent.getAttribute('data-plakakodu')
        );
      }
    }
  );
}

function bolgeHaritasi() {
    const element = document.querySelector('#bolgeHaritasi');
    const info = document.querySelector('.bolge-isimleri');

    element.addEventListener('mouseover',

        function (event) {
            if (event.target.tagName === 'path') {
                info.innerHTML = [
                    '<div>',
                    '<img src="./images/',
                    event.target.parentNode.getAttribute('id'),
                    '.jpg"><br /><p style="text-align:center;font-size:30px">',
                    event.target.parentNode.getAttribute('data-bolgeadi'),
                    '</p>',
                    '</div>',
                    
                ].join('');
            }
        }
    );

    element.addEventListener('mousemove',
        function (event) {
            info.style.top = event.pageY + 25 + 'px';
            info.style.left = event.pageX + 'px';
        }
    );

    element.addEventListener('mouseout',
        function (event) {
            info.innerHTML = '';
        }
    );

    element.addEventListener(
        'click',
        function (event) {
            if (event.target.tagName === 'path') {
                const parent = event.target.parentNode;
                const id = parent.getAttribute('id');

                if (id === 'guney-kibris') {
                    return;
                }

                window.location.href = (
                    '#'
                    + id
                    + '-'
                    + parent.getAttribute('data-plakakodu')
                );
            }
        }
    );
}