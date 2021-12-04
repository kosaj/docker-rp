## .NET 6 SETUP
FROM mcr.microsoft.com/dotnet/sdk:6.0 as build-env
WORKDIR /src

COPY *.csproj ./
RUN dotnet restore

COPY . .
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
# api expose port 80 when running production code.
EXPOSE 80
COPY --from=build-env /src/out .
ENTRYPOINT [ "dotnet", "example-api.dll" ]