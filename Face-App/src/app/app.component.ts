import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  @ViewChild('video', { static: true })
  videoElement!: ElementRef<HTMLVideoElement>;

  @ViewChild('canvas', { static: true })
  canvasElement!: ElementRef<HTMLCanvasElement>;

  ngOnInit(): void {
    this.initCam();
  }

  public initCam(){
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        const video = this.videoElement?.nativeElement;
        if (video) {
          video.srcObject = stream;
          video.play();
        }

      })
      .catch((error) => {
        console.error('Não foi possivel acessar a câmera: ', error);
      });
  }

  public takePicture(){
    const video = this.videoElement?.nativeElement;
    const canvas = this.canvasElement?.nativeElement;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    if (context) {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const urlImage = canvas.toDataURL('image/png');

      const linkDonwload = document.createElement('a');
      linkDonwload.href = urlImage;
      linkDonwload.download = 'foto.png';
      linkDonwload.click();

      console.log(urlImage);
      console.log('Foto tirada com sucesso!');
    }
  }
}
