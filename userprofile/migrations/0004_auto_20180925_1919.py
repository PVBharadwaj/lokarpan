# Generated by Django 2.1.1 on 2018-09-25 13:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userprofile', '0003_auto_20180917_2255'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='Picture',
            field=models.ImageField(help_text='Please Remember to Remove Exif data before uploading,otherwise images might be of incorrect orientation', upload_to=''),
        ),
    ]