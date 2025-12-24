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
  }
}
