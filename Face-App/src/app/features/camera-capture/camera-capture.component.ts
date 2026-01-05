import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { FaceDTO } from '../../core/models/FaceRequest';
import { FaceService } from '../../shared/services/face-service/face-service.service';

@Component({
  selector: 'app-camera-capture',
  imports: [],
  templateUrl: './camera-capture.component.html',
  styleUrl: './camera-capture.component.scss'
})
export class CameraCaptureComponent implements OnInit {


  @ViewChild('video', { static: true })
  videoElement!: ElementRef<HTMLVideoElement>;

  @ViewChild('canvas', { static: true })
  canvasElement!: ElementRef<HTMLCanvasElement>;

  private faceService = inject(FaceService);

  private face: FaceDTO | undefined;

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

      // Remove o prefixo "data:image/png;base64,"
      const base64Data = urlImage.split(',')[1];

      // Preenche o objeto face
      this.face = {
        type: 'image/png',
        data: base64Data
      };

      this.faceService.registerFace(this.face).subscribe({
        next: (response) => {
          console.log('Face registrada com sucesso:', response);
        },
        error: (error) => {
          console.error('Erro ao registrar face:', error);
        }
      });

      const linkDonwload = document.createElement('a');
      linkDonwload.href = urlImage;
      linkDonwload.download = 'foto.png';
      linkDonwload.click();

      console.log('Face capturada:', this.face);
      console.log('Foto tirada com sucesso!');
    }
  }
}
