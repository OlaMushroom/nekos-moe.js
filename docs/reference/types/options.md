# Body options types

## PostOptions
```ts
type PostOptions = {
  id?: string;
  nsfw?: boolean;
  uploader?: string | object;
  artist?: string;
  tags?: string[];
  sort?: 'newest' | 'oldest' | 'likes' | 'relevance';
  posted_before?: number; // milliseconds
  posted_after?: number; // milliseconds
  skip?: number;
  limit?: number;
};
```

## UserOptions
```ts
type UserOptions = {
  query?: string;
  skip?: number;
  limit?: number;
};
```

## UploadOptions

```ts
type UploadOptions = {
  image: File;
  nsfw: boolean;
  artist?: string;
  tags: string[];
}
```