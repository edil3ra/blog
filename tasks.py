from invoke import task
import os

DIR = os.path.dirname(__file__)
DIR_SCRIPT = os.path.join(DIR, 'scripts')
DIR_CV = os.path.join(DIR_SCRIPT, 'cv_generation')
DIR_CV_BUILD = os.path.join(DIR_CV, 'build')
PATH_CV_PROGRAM = os.path.join(DIR_CV, 'main.py')
PATH_DEFAULT_CV_FILE = os.path.join(DIR, 'src', 'data', 'cv.yaml')


@task
def clean(c):
    c.run('rm -rf {}/*'.format(DIR_CV_BUILD))


@task
def clean_build(c):
    ignore_ext = ['{}/*.{}'.format(DIR_CV_BUILD, ignore) for ignore in
                  ['aux', 'bcf', 'fdb_latexmk', 'fls', 'log', 'out', 'run.xml']]
    c.run('rm {}'.format(' '.join(ignore_ext)))


@task
def build_cv_info(c, filename=None):
    cv_file_path = PATH_DEFAULT_CV_FILE if not filename else os.path.join(DIR, filename)
    c.run(' '.join([PATH_CV_PROGRAM, cv_file_path]))



@task
def build_pdf(c):
    c.run(' '.join([
        'latexmk',
        '-pdfxe',
        '-pdf',
        '-cd-',
        '-jobname=scripts/cv_generation/build/cv',
        '-quiet',
        '-f',
        'scripts/cv_generation/build/cv'
    ]))
    c.run('latexmk -c -cd scripts/cv_generation/build/cv')

    # latexmk crash but build cv so code after this is never run
    ignore_ext = ['{}.*{}'.format(DIR_CV_BUILD, ignore) for ignore in
                  ['aux', 'bcf', 'fdb_taexmk', 'fls', 'log', 'out', 'run.xml']]
    c.run('rm {}'.format(ignore_ext))


@task(clean, build_cv_info, build_pdf)
def build_cv(c):
    print('building cv')


@task
def deploy(c):
    '''deploy no netify'''
    c.run('curl -X POST -d \'\' https://api.netlify.com/build_hooks/5b2772ff11b73b6c1326c650')
