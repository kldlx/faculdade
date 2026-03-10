@echo off
setlocal enabledelayedexpansion
color 09
title Gestor de Arquivos v1.0

:: Configuração do sistema de LOGS
set "pastaPrincipal=GestorArquivos"
set "arquivoLog=%pastaPrincipal%\Logs\atividade.log"

if not exist "%pastaPrincipal%\Logs" (
    mkdir "%pastaPrincipal%\Logs"
)

call :RegistrarLog "INICIAR SISTEMA" "SUCESSO" "GESTOR DE ARQUIVOS INICIADO"

echo.
echo ========================================================================================================================
echo                                             INICIANDO GESTOR DE ARQUIVOS
echo ========================================================================================================================
echo.

:: 1. Definindo a variável da pasta principal e verificando pra saber se ela já existe

echo Verificando a pasta principal: %pastaPrincipal%
if exist "%pastaPrincipal%" (
    echo.
    echo A pasta "%pastaPrincipal%" ja existe. Problema de Redundancia.
    call :RegistrarLog "VERIFICAR_PASTA_PRINCIPAL" "SUCESSO" "Pasta principal ja existe"
) else (
    mkdir "%pastaPrincipal%"
     if !errorlevel! equ 0 (
        echo.
        echo A pasta "%pastaPrincipal%" foi criada com sucesso.
        call :RegistrarLog "CRIAR_PASTA_PRINCIPAL" "SUCESSO" "Pasta principal criada"
    ) else (
        echo.
        echo ERRO ao criar pasta "%pastaPrincipal%"
        call :RegistrarLog "CRIAR_PASTA_PRINCIPAL" "FALHA" "Erro ao criar pasta principal"
    )
)

echo.
echo ========================================================================================================================
echo                             VERIFICANDO AS SUBPASTAS DENTRO DA PASTA: "%pastaPrincipal%"
echo ========================================================================================================================
echo. 

:: 2. Define a variável e verifica a existência das subpastas

:: Backups
if exist "%pastaPrincipal%\Backups" (
    echo.
    echo A pasta "%pastaPrincipal%\Backups" ja existe.
    call :RegistrarLog "VERIFICAR_PASTA_BACKUPS" "SUCESSO" "Pasta backups ja existe"
) else (
    mkdir "%pastaPrincipal%\Backups"
     if !errorlevel! equ 0 (
        echo.
        echo A pasta "%pastaPrincipal%\Backups" foi criada com sucesso.
        call :RegistrarLog "CRIAR_PASTA_BACKUPS" "SUCESSO" "Pasta backups criada"
    ) else (
        echo.
        echo ERRO ao criar pasta "%pastaPrincipal%\Backups"
        call :RegistrarLog "CRIAR_PASTA_BACKUPS" "FALHA" "Erro ao criar pasta backups"
    )
)


:: Documentos
if exist "%pastaPrincipal%\Documentos" (
    echo.
    echo A pasta "%pastaPrincipal%\Documentos" ja existe.
    call :RegistrarLog "VERIFICAR_PASTA_DOCS" "SUCESSO" "Pasta documentos ja existe"
) else (
    mkdir "%pastaPrincipal%\Documentos"
     if !errorlevel! equ 0 (
        echo.
        echo A pasta "%pastaPrincipal%\Documentos" foi criada com sucesso.
        call :RegistrarLog "CRIAR_PASTA_DOCS" "SUCESSO" "Pasta documentos criada"
    ) else (
        echo.
        echo ERRO ao criar pasta "%pastaPrincipal%\Documentos"
        call :RegistrarLog "CRIAR_PASTA_DOCS" "FALHA" "Erro ao criar pasta documentos"
    )
)


::Logs
if exist "%pastaPrincipal%\Logs" (
    echo.
    echo A pasta "%pastaPrincipal%\Logs" ja existe. Problema de Redundancia.
    call :RegistrarLog "VERIFICAR_PASTA_LOGS" "SUCESSO" "Pasta logs ja existe"
) else (
    mkdir "%pastaPrincipal%\Logs"
    if !errorlevel! equ 0 (
        echo.
        echo A pasta "%pastaPrincipal%\Logs" foi criada com sucesso.
        call :RegistrarLog "CRIAR_PASTA_LOGS" "SUCESSO" "Pasta logs criada"
    ) else (
        echo.
        echo ERRO ao criar pasta "%pastaPrincipal%\Logs"
        call :RegistrarLog "CRIAR_PASTA_LOGS" "FALHA" "Erro ao criar pasta logs"
    )
)

echo.
echo ========================================================================================================================
echo                                         PROCESSO CONCLUIDO COM SUCESSO.
echo ========================================================================================================================
echo.

echo.
echo ========================================================================================================================
echo                                          CRIANDO ARQUIVOS DE EXEMPLO.
echo ========================================================================================================================
echo.

:: 3. Criando arquivo relatorio.txt

echo Criando relatorio.txt...
(
echo RELATORIO SISTEMA
echo.
echo Data: %date%
echo Hora: %time%
echo.
echo Usuario: %username%
echo Computador: %computername%
echo.
echo Total de Pastas: 3
echo - Backups
echo - Documentos
echo - Logs
echo.
echo Desenvolvido por: Kauã Oliveira de Lima
) > "%pastaPrincipal%\Documentos\relatorio.txt"

if !errorlevel! equ 0 (
    echo. 
    echo relatorio.txt criado com sucesso
    echo.
    call :RegistrarLog "CRIAR_ARQUIVO" "SUCESSO" "Arquivo relatorio.txt criado na pasta Documentos"
) else (
    echo. 
    echo ERRO ao criar relatorio.txt
    echo.
    call :RegistrarLog "CRIAR_ARQUIVO" "FALHA" "Erro ao criar relatorio.txt"
)

:: 4. Criando arquivo dados.csv

echo Criando dados.csv...
(
echo ID, NOME, DEPARTAMENTO, SALARIO, DATA_ADMISSÃO
echo 1, João Silva, Vendas, 2500.00, 2025-01-23
echo 2, Kauã Oliveira, TI, 4500.00, 2024-11-13
echo 3, Alexandre Gomes, Segurança, 6500.00, 2022-10-27
echo 4, Ketlyn Patricia, RH, 5500.00, 2021-02-02
) > "%pastaPrincipal%\Documentos\dados.csv"

if !errorlevel! equ 0 (
    echo. 
    echo dados.csv criado com sucesso
    echo.
    call :RegistrarLog "CRIAR_ARQUIVO" "SUCESSO" "Arquivo dados.csv criado na pasta Documentos"
) else (
    echo. 
    echo ERRO ao criar dados.csv
    echo.
    call :RegistrarLog "CRIAR_ARQUIVO" "FALHA" "Erro ao criar dados.csv"
)

:: 5. Criando config.ini

echo Criando config.ini...
(
echo [ConfiguracoesGerais]
echo versao=1.0
echo data_criacao=%date%
echo.
echo [Database]
echo host=localhost
echo porta=5432
echo usuario=admin
echo senha=********
echo.
echo [Preferencias]
echo idioma=pt_BR
echo tema=escuro
echo backup_automatico=true
echo.
echo [Logs]
echo nivel=info
echo arquivo=system.log
echo max_tamanho=10MB
) > "%pastaPrincipal%\Documentos\config.ini"

if !errorlevel! equ 0 (
    echo. 
    echo config.ini criado com sucesso
    echo.
    call :RegistrarLog "CRIAR_ARQUIVO" "SUCESSO" "Arquivo config.ini criado na pasta Documentos"
) else (
    echo. 
    echo ERRO ao criar config.ini
    echo.
    call :RegistrarLog "CRIAR_ARQUIVO" "FALHA" "Erro ao criar config.ini"
)

echo.
echo ========================================================================================================================
echo                                           PROCESSO CONCLUIDO COM SUCESSO!
echo ========================================================================================================================
echo.
echo Backups baixados em: "%pastaPrincipal%\Backups"
echo.
echo Arquivos criados em: "%pastaPrincipal%\Documentos"
echo.
echo Logs salvos em: "%pastaPrincipal%\Logs"
echo.

echo.
echo ========================================================================================================================
echo                                             INICIANDO SIMULACAO DE BACKUP
echo ========================================================================================================================
echo.

if exist "%pastaPrincipal%\Documentos\*" (
    echo Copiando arquivos para backup...
    echo.
    xcopy "%pastaPrincipal%\Documentos\*" "%pastaPrincipal%\Backups\" /Y /I
    echo.

    if !errorlevel! equ 0 (
        echo Arquivos copiados com sucesso.
        echo.
        call :RegistrarLog "BACKUP_ARQUIVOS" "SUCESSO" "Arquivos copiados de documentos para backup"
        echo Criando um arquivo de confirmacao do backup...
        echo.
        (
            echo BACKUP REALIZADO COM SUCESSO
            echo. 
            echo Data do Backup: %date%
            echo Hora do Backup: %time%
            echo.
             echo Arquivos incluidos no backup:
            echo - relatorio.txt
            echo - dados.csv  
            echo - config.ini
            echo.
            echo Local: %pastaPrincipal%\Backups\
            echo.
            echo *** BACKUP COMPLETO ***
        ) > "%pastaPrincipal%\Backups\backup_completo.bak"

        if !errorlevel! equ 0 (
            echo Arquivo backup_completo.bak criado com sucesso.
            echo.
            call :RegistrarLog "CRIAR_BACKUP_FILE" "SUCESSO" "Arquivo backup_completo.bak criado com sucesso"
        ) else (
            echo.
            echo ERRO ao criar arquivo de backup
            echo.
            call :RegistrarLog "CRIAR_BACKUP_FILE" "FALHA" "Erro ao criar backup_completo.bak"
        )
    ) else (
        echo.
        echo ERRO ao copiar arquivos para backup.
        echo.
        call :RegistrarLog "BACKUP_ARQUIVOS" "FALHA" "Erro ao copiar arquivos para Backups"
    ) 
    ) else (
        echo.
        echo Nenhum arquivo encontrado na pasta Documentos para backup.
        echo.
        call :RegistrarLog "BACKUP_ARQUIVOS" "FALHA" "Pasta documentos vazia"
    )



echo.
echo ========================================================================================================================
echo                                                  RESUMO DO BACKUP
echo ========================================================================================================================
echo.
dir "%pastaPrincipal%\Backups\" /B
echo.
echo ========================================================================================================================
echo                                                  BACKUP CONCLUIDO.
echo ========================================================================================================================
echo.

echo.
echo ========================================================================================================================
echo                                             GERANDO RELATORIO FINAL
echo ========================================================================================================================
echo.

echo Criando resumo_execucao.txt...
(
    echo RELATORIO EXECUCAO
    echo.
    echo Total de Arquivos criados: 4
    echo Total de Pastas criadas: 3
    echo Data do Backup: %date%
    echo Hora do Backup: %time%
    echo.
    echo Local: %pastaPrincipal%\
    echo.
    echo Arquivos Criados:
    echo.
    echo - relatorio.txt
    echo.
    echo - dados.csv
    echo.
    echo - config.ini
    echo.
    echo - backup_completo.bak
    echo.
    echo Pastas Criadas:
    echo.
    echo - Backups
    echo.
    echo - Documentos
    echo.
    echo - Logs
    echo.
    echo Desenvolvido por Kauã Oliveira de Lima
    echo.
) > "%pastaPrincipal%\resumo_execucao.txt"

if !errorlevel! equ 0 (
    echo.
    echo resumo_execucao.txt criado com sucesso!
    echo.
    echo Local: "%pastaPrincipal%\resumo_execucao.txt"
    call :RegistrarLog "CRIAR_RESUMO" "SUCESSO" "Arquivo resumo_execucao.txt criado com sucesso."
) else (
    echo.
    echo ERRO ao criar resumo_execucao.txt
    call :RegistrarLog "CRIAR_RESUMO" "FALHA" "ERRO ao criar resumo_execucao.txt"
)

echo.
echo ========================================================================================================================
echo                                               EXECUCAO FINALIZADA!
echo ========================================================================================================================
echo.

pause
exit /b

:RegistrarLog
set "operacao=%~1"  
set "resultado=%~2"
set "detalhes=%~3"
echo [%date% %time%] [%operacao%] [%resultado%] %detalhes% >> "%arquivoLog%"
goto :EOF
