interface User {
  _id: string;
  name: string;
  email: string;
}

interface Image {
  _id: string;
  fileName: string;
  imageUrl: string;
}

interface ImageFolder {
  _id: string;
  userId: string;
  folderName: string;
  images: Image[];
}

export type { User, Image, ImageFolder };
