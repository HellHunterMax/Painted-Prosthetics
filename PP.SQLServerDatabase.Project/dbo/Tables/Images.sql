CREATE TABLE [dbo].[Images] (
    [ImageId]  INT            IDENTITY (1, 1) NOT NULL,
    [Name]     NVARCHAR (MAX) NOT NULL,
    [ArtistId] INT            NOT NULL,
    [AddDate]  DATETIME2 (7)  NOT NULL,
    [Likes]    INT            NOT NULL,
    [Uri]      NVARCHAR (MAX) NOT NULL,
    CONSTRAINT [PK_Images] PRIMARY KEY CLUSTERED ([ImageId] ASC),
    CONSTRAINT [FK_Images_Artists_ArtistId] FOREIGN KEY ([ArtistId]) REFERENCES [dbo].[Artists] ([ArtistId]) ON DELETE CASCADE
);


GO
CREATE NONCLUSTERED INDEX [IX_Images_ArtistId]
    ON [dbo].[Images]([ArtistId] ASC);

