CREATE TABLE [dbo].[Artists] (
    [ArtistId] INT            IDENTITY (1, 1) NOT NULL,
    [Name]     NVARCHAR (MAX) NOT NULL,
    [Bio]      NVARCHAR (MAX) NULL,
    [Website]  NVARCHAR (MAX) NULL,
    [Email]    NVARCHAR (MAX) NULL,
    CONSTRAINT [PK_Artists] PRIMARY KEY CLUSTERED ([ArtistId] ASC)
);

