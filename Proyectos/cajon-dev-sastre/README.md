# CajonDevSastre

Proyecto personal creado para organizar recursos y notas que tenía dispersas en un archivo Markdown en el disco duro. Ahora están reunidos en una aplicación más accesible y ordenada.

## Descripción

`CajonDevSastre` es una pequeña aplicación que muestra recursos en componentes reutilizables y mantiene la información organizada en una estructura clara.

## Características

- Aplicación basada en componentes.
- Servicio compartido para centralizar los datos.
- Componentes de tarjeta y cabecera (`cajon-card`, `header`).
- Diseño sencillo pensado para mantener información accesible.

## Tecnologías

- Angular
- TypeScript
- HTML / CSS
- PNPM

## Instalación

```bash
pnpm install
```

## Ejecución

```bash
pnpm start
```

Después abre `http://localhost:4200` en tu navegador.

## Estructura principal

- `src/app/app.ts` — entrada principal de la aplicación.
- `src/app/cajones.service.ts` — servicio para manejo de datos.
- `src/app/cajon-card/` — componente de tarjeta.
- `src/app/header/` — componente de cabecera.

## Contribuir

1. Haz un fork de este repositorio.
2. Crea una rama nueva: `git checkout -b feature/nombre-de-la-funcion`.
3. Haz tus cambios y prueba localmente.
4. Envía un pull request describiendo la mejora.


