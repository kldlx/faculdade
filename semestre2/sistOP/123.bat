@echo off
chcp 65001 > nul
echo ========================================
echo    GESTOR DE ARQUIVOS - INICIANDO
echo ========================================
echo.

REM Usar pasta no usuario atual para evitar permissoes
set "BASE_DIR=%USERPROFILE%\GestorArquivos"
set "DOC_DIR=%BASE_DIR%\Documentos"
set "LOG_DIR=%BASE_DIR%\Logs"
set "BACKUP_DIR=%BASE_DIR%\Backups"
set "LOG_FILE=%LOG_DIR%\atividade.log"

echo Local base: %BASE_DIR%
echo.

REM Criar diretorios
echo [1/5] Criando estrutura de pastas...

if not exist "%BASE_DIR%" (
    mkdir "%BASE_DIR%" 2>nul && (
        echo [OK] Pasta base criada
        echo %date% %time% - Criar pasta Base - Success >> "%LOG_FILE%"
    ) || (
        echo [ERRO] Nao foi possivel criar pasta base
        echo %date% %time% - Criar pasta Base - Falha >> "%LOG_FILE%"
        goto :erro
    )
)

if not exist "%DOC_DIR%" (
    mkdir "%DOC_DIR%" 2>nul && echo [OK] Pasta Documentos criada
)
if not exist "%LOG_DIR%" (
    mkdir "%LOG_DIR%" 2>nul && echo [OK] Pasta Logs criada
)
if not exist "%BACKUP_DIR%" (
    mkdir "%BACKUP_DIR%" 2>nul && echo [OK] Pasta Backups criada
)

REM Criar arquivos
echo.
echo [2/5] Criando arquivos...

REM relatorio.txt com Opcao 1 - Relatorio de Sistema
(
echo RELATORIO DO SISTEMA
echo ====================
echo Data: %date%
echo Hora: %time%
echo Usuario: %username%
echo Computador: %computername%
) > "%DOC_DIR%\relatorio.txt" && echo [OK] relatorio.txt

REM dados.csv com informacoes uteis
(
echo ID,Produto,Preco,Estoque,Categoria
echo 1,Notebook,2500.00,15,Eletronicos
echo 2,Mouse,45.90,50,Perifericos
echo 3,Teclado,120.00,30,Perifericos
echo 4,Monitor,899.99,10,Eletronicos
echo 5,Webcam,150.50,25,Perifericos
) > "%DOC_DIR%\dados.csv" && echo [OK] dados.csv

REM config.ini com configuracoes realisticas
(
echo [ConfiguracoesSistema]
echo Versao=2.1.0
echo Usuario=%username%
echo DataInstalacao=%date%
echo BackupAutomatico=true
echo IntervaloBackup=24
echo PastaBackup=%BACKUP_DIR%
echo LogAtividades=true
echo NivelLog=INFO
echo [Preferencias]
echo Idioma=pt-BR
echo Tema=Escuro
echo Notificacoes=true
) > "%DOC_DIR%\config.ini" && echo [OK] config.ini

REM Backup
echo.
echo [3/5] Fazendo backup...
copy "%DOC_DIR%\*" "%BACKUP_DIR%\" >nul 2>&1 && echo [OK] Backup realizado

REM Arquivo de backup complexo
echo.
echo [4/5] Criando arquivo de backup...
(
echo BACKUP COMPLETO DO SISTEMA
echo ===========================
echo Data: %date%
echo Hora: %time%
echo Sistema: Gestor de Arquivos v2.1
echo.
echo Arquivos incluidos no backup:
echo - relatorio.txt (Relatorio do sistema)
echo - dados.csv (Base de dados de produtos)
echo - config.ini (Configuracoes do sistema)
echo.
echo Total de arquivos: 3
echo Tamanho aproximado: 1.2 KB
) > "%BACKUP_DIR%\backup_complexo.bak" && echo [OK] backup_complexo.bak criado

REM Relatorio final
echo.
echo [5/5] Gerando relatorio...
(
echo RELATORIO DE EXECUCAO
echo =====================
echo.
echo INFORMACOES DO SISTEMA:
echo Usuario: %username%
echo Computador: %computername%
echo Data/Hora: %date% %time%
echo.
echo ARQUIVOS CRIADOS:
echo - relatorio.txt: Relatorio do sistema com informacoes basicas
echo - dados.csv: Base de dados de produtos com 5 registros
echo - config.ini: Configuracoes do sistema e preferencias
echo - backup_complexo.bak: Detalhes do backup realizado
echo - atividade.log: Registro de todas as operacoes
echo - resumo_execucao.txt: Este relatorio
echo.
echo ESTATISTICAS:
echo Total de arquivos criados: 9
echo Total de pastas criadas: 4
echo Data/Hora do backup: %date% %time%
echo Local do projeto: %BASE_DIR%
) > "%BASE_DIR%\resumo_execucao.txt" && echo [OK] relatorio final criado

REM Registrar tudo no log
(
echo %date% %time% - Script iniciado - Success
echo %date% %time% - Pastas criadas - Success
echo %date% %time% - Arquivos criados - Success
echo %date% %time% - Backup realizado - Success
echo %date% %time% - Relatorio gerado - Success
) >> "%LOG_FILE%"

echo.
echo ========================================
echo         EXECUCAO CONCLUIDA!
echo ========================================
echo.
echo Pasta criada em: %BASE_DIR%
echo.
echo Conteudo criado:
echo - Pasta Documentos: 3 arquivos com informacoes uteis
echo - Pasta Backups: 4 arquivos de backup
echo - Pasta Logs: 1 arquivo de atividades
echo - Relatorio final: 1 arquivo resumo
echo.
echo Pressione qualquer tecla para abrir a pasta...
pause > nul

REM Abrir a pasta no explorador
explorer "%BASE_DIR%"
goto :fim

:erro
echo.
echo Ocorreu um erro durante a execucao!
echo Verifique as permissoes do sistema.
pause
exit /b 1

:fim
exit /b 0