import './Perf.css';

export default function () {

  let perfContainer = document.createElement('section');
  perfContainer.id = 'sec_performo';
  perfContainer.style.position = 'fixed';
  perfContainer.style.padding = '10px';
  document.body.appendChild(perfContainer);

  let lastTimeOrigin = 0;
  requestAnimationFrame(function addMarker(timeOrigin) {
    let timeOriginDiff = timeOrigin - lastTimeOrigin;
    let pixelSpacing = ((timeOriginDiff / 16.67) * 2);
    pixelSpacing = Math.ceil(pixelSpacing);    
    lastTimeOrigin = timeOrigin;

    let marker = document.createElement('div');
    marker.style.display = 'inline-block';
    marker.style.margin = `1px ${pixelSpacing}px 1px 1px`;
    marker.style.width = '5px';
    marker.style.height = '5px';
    marker.style.backgroundColor = 'green';
    perfContainer.appendChild(marker);
    requestAnimationFrame(addMarker);
  })
}